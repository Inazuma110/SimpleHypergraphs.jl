var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "SimpleHypergraphs.jl",
    "title": "SimpleHypergraphs.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleHypergraphs.jl-1",
    "page": "SimpleHypergraphs.jl",
    "title": "SimpleHypergraphs.jl",
    "category": "section",
    "text": "Documentation for SimpleHypergraphs.jlFor details please go to the Reference section."
},

{
    "location": "reference/#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "reference/#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": "CurrentModule = SimpleHypergraphs\nDocTestSetup = quote\n    using SimpleHypergraphs\nend"
},

{
    "location": "reference/#SimpleHypergraphs.Hypergraph",
    "page": "Reference",
    "title": "SimpleHypergraphs.Hypergraph",
    "category": "type",
    "text": "Hypergraph{T} <: AbstractMatrix{Union{T, Nothing}}\n\nA hypergraph storing information about vertices and hyperedges.\n\nConstructors\n\nHypergraph{T}(n,k) where {T<:Real}\n\nConstruct a hypergraph with a given number of vertices and hyperedges.\n\nHypergraph(m::AbstractMatrix{T}) where {T<:Real}\n\nConstruct a hypergraph using its matrix representation. In the matrix representation rows are vertices and columns are hyperedges.\n\nArguments\n\nT : type of values stored in the hypergraph\nn : number of vertices\nk : number of hyperedges\nm : a matrix representation rows are vertices and columns are hyperedges\n\n\n\n\n\n"
},

{
    "location": "reference/#Types-1",
    "page": "Reference",
    "title": "Types",
    "category": "section",
    "text": "Hypergraph"
},

{
    "location": "reference/#SimpleHypergraphs.add_hyperedge!-Union{Tuple{Hypergraph{T}}, Tuple{T}} where T<:Real",
    "page": "Reference",
    "title": "SimpleHypergraphs.add_hyperedge!",
    "category": "method",
    "text": "add_hyperedge!(h::Hypergraph{T};vertices::Dict{Int,T} = Dict{Int,T}()) where T <: Real\n\nAdds a hyperedge to a given hypergraph h. Optionally, existing vertices can be added to the created hyperedge. The paramater vertices represents a dictionary of vertex identifiers and values stored at the hyperedges\n\n\n\n\n\n"
},

{
    "location": "reference/#SimpleHypergraphs.add_vertex!-Union{Tuple{Hypergraph{T}}, Tuple{T}} where T<:Real",
    "page": "Reference",
    "title": "SimpleHypergraphs.add_vertex!",
    "category": "method",
    "text": "add_vertex!(h::Hypergraph{T};hyperedges::Dict{Int,T} = Dict{Int,T}()) where T <: Real\n\nAdds a vertex to a given hypergraph h. Optionally, the vertex can be added to existing hyperedges. The hyperedges parameter presents a dictionary of hyperedge identifiers and values stored at the hyperedges\n\n\n\n\n\n"
},

{
    "location": "reference/#Manipulating-vertices-and-hyperedges-1",
    "page": "Reference",
    "title": "Manipulating vertices and hyperedges",
    "category": "section",
    "text": "add_hyperedge!(::Hypergraph{T};::Dict{Int,T}) where T <: Real\nadd_vertex!(::Hypergraph{T};::Dict{Int,T}) where T <: Real"
},

{
    "location": "reference/#Base.getindex-Tuple{Hypergraph,Int64,Int64}",
    "page": "Reference",
    "title": "Base.getindex",
    "category": "method",
    "text": "Base.getindex(h::Hypergraph, idx::Vararg{Int,2})\n\nReturns a value for a given vertex-hyperedge pair idx for a hypergraph h. If a vertex does not belong to a hyperedge nothing is returned.\n\n\n\n\n\n"
},

{
    "location": "reference/#Base.setindex!-Tuple{Hypergraph,Nothing,Int64,Int64}",
    "page": "Reference",
    "title": "Base.setindex!",
    "category": "method",
    "text": "Base.setindex!(h::Hypergraph, ::Nothing, idx::Vararg{Int,2})\n\nRemoves a vertex from a given hyperedge for a hypergraph h and a given vertex-hyperedge pair idx.\n\n\n\n\n\n"
},

{
    "location": "reference/#Base.setindex!-Tuple{Hypergraph,Real,Int64,Int64}",
    "page": "Reference",
    "title": "Base.setindex!",
    "category": "method",
    "text": "Base.setindex!(h::Hypergraph, v::Real, idx::Vararg{Int,2})\n\nAdds a vertex to a hyperedge (represented by indices idx) and assigns value v to be stored with that assignment.\n\n\n\n\n\n"
},

{
    "location": "reference/#Hypergraph-array-getters-and-setters-1",
    "page": "Reference",
    "title": "Hypergraph array getters and setters",
    "category": "section",
    "text": "Normally you work with a hypergraph via array setters, for example the code below craete an Hypergraph and add vertex one to hyperedges 2 and 3 with weight 5:h = Hypergraph{Int64}(2,3);\nh[1, 2:3] .= 5;  \nh\n\n# output\n\n2×3 Hypergraph{Int64}:\n nothing  5         5\n nothing   nothing   nothinggetindex(::Hypergraph, ::Vararg{Int,2})\nsetindex!(::Hypergraph, ::Nothing, ::Vararg{Int,2})\nsetindex!(::Hypergraph, ::Real, ::Vararg{Int,2})"
},

{
    "location": "reference/#Base.size-Tuple{Hypergraph}",
    "page": "Reference",
    "title": "Base.size",
    "category": "method",
    "text": "Base.size(h::Hypergraph)\n\nReturns the size of Hypergraph h. The result is a tuple of the number of vertices and the number of hyperedges\n\n\n\n\n\n"
},

{
    "location": "reference/#SimpleHypergraphs.getvertices-Tuple{Hypergraph,Int64}",
    "page": "Reference",
    "title": "SimpleHypergraphs.getvertices",
    "category": "method",
    "text": "getvertices(h::Hypergraph, he_id::Int)\n\nReturns vertices from a hypergraph a for a given hyperedge he_id.\n\n\n\n\n\n"
},

{
    "location": "reference/#SimpleHypergraphs.gethyperedges-Tuple{Hypergraph,Int64}",
    "page": "Reference",
    "title": "SimpleHypergraphs.gethyperedges",
    "category": "method",
    "text": "gethyperedges(h::Hypergraph, v_id::Int)\n\nReturns hyperedges for a given vertex v_id in a hypergraph h.\n\n\n\n\n\n"
},

{
    "location": "reference/#SimpleHypergraphs.BipartiteView",
    "page": "Reference",
    "title": "SimpleHypergraphs.BipartiteView",
    "category": "type",
    "text": "BipartiteView{T<:Real} <: AbstractGraph{Int64}\n\nCreate a bipartite view of a hypergraph h. Note this is a view - changes to the original hypergraph will be automatically reflected in the view.\n\nThe bipartite view of a hypergraph is suitable for processing with the LightGraphs.jl package. Several LightGraphs methods are provided for the compability.\n\n\n\n\n\n"
},

{
    "location": "reference/#SimpleHypergraphs.shortest_path-Tuple{BipartiteView,Int64,Int64}",
    "page": "Reference",
    "title": "SimpleHypergraphs.shortest_path",
    "category": "method",
    "text": "shortest_path(b::BipartiteView,source::Int, target::Int)\n\nFinds a single shortest path in a graph b between vertices source and target. Note that if several paths of the same length exist, only one will be returned.\n\n\n\n\n\n"
},

{
    "location": "reference/#Hypergraph-info-1",
    "page": "Reference",
    "title": "Hypergraph info",
    "category": "section",
    "text": "size(::Hypergraph)\ngetvertices(::Hypergraph, ::Int)\ngethyperedges(::Hypergraph, ::Int)\n\nBipartiteView\nshortest_path(::BipartiteView, ::Int, ::Int)"
},

{
    "location": "reference/#SimpleHypergraphs.hg_save",
    "page": "Reference",
    "title": "SimpleHypergraphs.hg_save",
    "category": "function",
    "text": "hg_save(io::IO, h::Hypergraph)\n\nSaves a hypergraph h to an output stream io.\n\n\n\n\n\nhg_save(fname::AbstractString, h::Hypergraph)\n\nSaves a hypergraph h to a file fname.\n\n\n\n\n\n"
},

{
    "location": "reference/#SimpleHypergraphs.hg_load",
    "page": "Reference",
    "title": "SimpleHypergraphs.hg_load",
    "category": "function",
    "text": "hg_load(fname::AbstractString, T::Type{<:Real})\n\nLoads a hypergraph from a stream io. The second argument T represents type of data in the hypegraph\n\n\n\n\n\nhg_load(fname::AbstractString, T::Type{<:Real})\n\nLoads a hypergraph from a file fname. The second argument T represents type of data in the hypegraph\n\n\n\n\n\n"
},

{
    "location": "reference/#I/O-1",
    "page": "Reference",
    "title": "I/O",
    "category": "section",
    "text": "hg_save\nhg_loadDocTestSetup = nothing"
},

]}
