# TODO: maybe more fancy file format and correctness checking should be done
struct HGF_FORMAT end
struct JSON_FORMAT end

"""
    hg_save(io::IO, h::Hypergraph, format::Type{HGF_FORMAT})

Saves a hypergraph `h` to an output stream `io` in `hgf` format.

"""
function hg_save(io::IO, h::Hypergraph, format::Type{HGF_FORMAT})
    println(io, length(h.v2he), " ", length(h.he2v))
    for he in h.he2v
        skeys = sort(collect(keys(he)))
        println(io, join(["$k=$(he[k])" for k in skeys], ' '))
    end
end


"""
    hg_save(io::IO, h::Hypergraph, format::Type{JSON_FORMAT})

Saves a hypergraph `h` to an output stream `io` in `json` format.
The `json` in output contains the following information (keys):

* `n` : number of vertices
* `k` : number of hyperedges
* `m` : a matrix representation of `h` where rows are vertices and columns are hyperedges
* `v2he` : mapping vertices to hyperedges
* `v_meta` : vertices metadata
* `he_meta` : hyperedges metadata

"""
function hg_save(io::IO, h::Hypergraph, format::Type{JSON_FORMAT})
    json_hg = Dict{Symbol, Any}()

    json_hg[:n] = nhv(h)
    json_hg[:k] = nhe(h)

    json_hg[:m] = JSON3.write(Matrix(h))
    json_hg[:v2he] = JSON3.write(h. v2he)

    json_hg[:v_meta] = JSON3.write(h.v_meta)
    json_hg[:he_meta] = JSON3.write(h.he_meta)

    JSON3.write(io, json_hg)
end


"""
    hg_save(
        fname::AbstractString, h::Hypergraph;
        format::Union{Type{HGF_FORMAT}, Type{JSON_FORMAT_DICT}, Type{JSON_FORMAT_MATRIX}}
    )

Saves a hypergraph `h` to a file `fname` in the specified `format`.

"""
hg_save(
    fname::AbstractString, h::Hypergraph;
    format::Union{Type{HGF_FORMAT}, Type{JSON_FORMAT}}=HGF_FORMAT) =
    open(io -> hg_save(io, h, format), fname, "w")


"""
    hg_load(
        fname::AbstractString, T::Type{<:Real}, format::Type{HGF_FORMAT};
        V=Nothing, E=Nothing
    )

Loads a hypergraph from a stream `io` from `hgf` format. The second argument
`T` represents type of data in the hypegraph. `V` and `E` represent the type
of vertex metadata and hyperedge metadata, respectively.

Skips a single initial comment.

"""
function hg_load(io::IO, T::Type{<:Real}, format::Type{HGF_FORMAT}; V=Nothing, E=Nothing)
    line = readline(io)

    if startswith(line, "\"\"\"")
      singleline = true
        while(
            !( (!singleline && endswith(line, "\"\"\"")) ||
            (singleline && endswith(line, "\"\"\"") && length(line)>5)
            ) &&
            !eof(io)
            )
                line = readline(io)
                singleline = false
        end
        if eof(io)
            throw(ArgumentError("malformed input"))
        end
       line = readline(io)
    end

    l = split(line)
    length(l) == 2 || throw(ArgumentError("expected two integers"))
    n, k = parse.(Int, l)
    h = Hypergraph{T, V, E}(n, k)
    lastv = 0
    for i in 1:k
        for pos in split(readline(io))
            entry = split(pos, '=')
            length(entry) == 2 || throw(ArgumentError("expected vertex=weight"))
            v = parse(Int, entry[1])
            w = parse(T, entry[2])
            if v > lastv
                lasti = v
            else
                throw(ArgumentError("vertices in hyperedge must be sorted"))
            end
            h[v, i] = w
        end
    end
    # we ignore lines beyond k+1 in the file
    h
end


"""
    hg_load(
        fname::AbstractString, T::Type{<:Real},
        format::Type{JSON_FORMAT_MATRIX};
        V=Nothing, E=Nothing
    )

Loads a hypergraph from a stream `io` from `json` format.
The second argument `T` represents type of data in the hypegraph.
`V` and `E` represent the type of vertex metadata and hyperedge metadata, respectively.

"""
function hg_load(io::IO, T::Type{<:Real}, format::Type{JSON_FORMAT}; V=Nothing, E=Nothing)
    json_hg = JSON3.read(readline(io))

    m = reshape(JSON3.read(json_hg.m, Array{Union{T, Nothing}}), json_hg.n, json_hg.k)

    v_meta = Vector{Union{Nothing,V}}(nothing, size(m, 1))
    he_meta = Vector{Union{Nothing,E}}(nothing, size(m, 2))

    if V != Nothing
        v_meta = JSON3.read(json_hg.v_meta, Array{Union{V, Nothing}})
    end

    if E != Nothing
        he_meta = JSON3.read(json_hg.he_meta, Array{Union{E, Nothing}})
    end

    h = Hypergraph{T, V, E}(m; v_meta=v_meta, he_meta=he_meta)

    h
end


"""
    hg_load(
        fname::AbstractString, T::Type{<:Real}, format::Type{JSON_FORMAT_DICT};
        V=Nothing, E=Nothing
    )

Loads a hypergraph from a stream `io` from `json` format, where the hypergraph is
represented as a dict. The second argument `T` represents type of data in the hypegraph.
`V` and `E` represent the type of vertex metadata and hyperedge metadata, respectively.

"""


"""
    hg_load(
        fname::AbstractString,
        T::Type{<:Real};
        format::Union{Type{HGF_FORMAT}, Type{JSON_FORMAT_DICT}, Type{JSON_FORMAT_MATRIX}}=HGF_FORMAT,
        V=Nothing,
        E=Nothing
    )

Loads a hypergraph from a file `fname`. The second argument
`T` represents type of data in the hypegraph

"""
hg_load(
    fname::AbstractString,
    T::Type{<:Real};
    format::Union{Type{HGF_FORMAT}, Type{JSON_FORMAT}}=HGF_FORMAT,
    V=Nothing,
    E=Nothing) =
    open(io -> hg_load(io, T, format; V=V, E=E), fname, "r")
