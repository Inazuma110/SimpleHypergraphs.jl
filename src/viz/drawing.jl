struct GraphBased end
struct HyperNetX end

let div_id = 0
    global get_next_div_id
    function get_next_div_id()
        div_id += 1
    end
end

"""
    function draw(
            h::Hypergraph,
            type::Type{GraphBased};
            element::Union{String, Int}=get_next_div_id(),
            width::Int=500,
            height::Int=500,
            radius::Real=10,
            node_radii::Union{Vector{<:Real}, Nothing}=nothing,
            node_color::String="#999",
            node_colors::Union{Vector{String}, Nothing}=nothing,
            node_stroke::Union{String, Nothing} = nothing,
            node_strokes::Union{Vector{String}, Nothing}=nothing,
            stroke_width::Real=0,
            stroke_widths::Union{Vector{<:Real}, Nothing}=nothing,
            node_opacity::Real=1,
            node_opacities::Union{Vector{<:Real}, Nothing}=nothing,
            stroke_opacity::Real=1,
            stroke_opacities::Union{Vector{<:Real}, Nothing}=nothing,
            with_node_labels::Bool=false,
            node_labels::Union{Vector{String}, Nothing}=nothing,
            with_node_metadata_hover::Bool=false,
            with_node_weight::Bool=false,
            he_colors::Union{Vector{String}, Nothing}=nothing,
            with_he_labels::Bool=false,
            he_labels::Union{Vector{String}, Nothing}=nothing,
            with_he_metadata_hover::Bool=false
        )

Draw a hypergraph `h` in a web-based environment (e.g. Jupyter Notebook),
using a js script based on the library (D3)[https://d3js.org/].
Each hyperedge `he` is represented by a *fake* vertex `fv` to which
each vertex `v ∈ he` is connected.

**Arguments**

* `h` : the hypergraph to draw
* `type` : how the hypergraph will be drawn. If `type=GraphBased`, each hyperedge
will be represented as a vertex (see above)
* `width` : width of the figure
* `height` : height of the figure
* `radius` : same default radius for each vertex (represented as a circle)
* `node_radii` : distinct radius values for each vertex
* `node_color` : same default color for each vertex
* `node_colors` : distinct node colors for each vertex
* `node_stroke` : same default stroke for each vertex
* `node_strokes` : distinct node strokes for each vertex
* `stroke_width` : same default stroke-width for each vertex
* `stroke_widths` : distinct stroke-width values for each vertex
* `node_opacity` : same default opacity for each vertex
* `node_opacities` : distinct node-opacity values for each vertex
* `stroke_opacity` :  same default stroke-opacity for each vertex
* `stroke_opacities` : distinct stroke-opacity values for each vertex
* `with_node_labels` : whether displaying node labels
* `node_labels` : node labels to be shown
* `with_node_metadata_hover` : whether displaying node metadata when hovering each vertex
* `with_node_weight` : whether displaying node weights within each hyperedge
* `he_colors` : distinct hyperedge colors for each hyperedge
* `with_he_labels` : whether displaying hyoeredges labels
* `with_he_metadata_hover` : whether displaying hyperedge metadata when hovering each hyperedge

"""
function draw(
        h::Hypergraph,
        type::Type{GraphBased};
        element::Union{String, Int}=get_next_div_id(),
        width::Int=500,
        height::Int=500,
        radius::Real=10,
        node_radii::Union{Vector{<:Real}, Nothing}=nothing,
        node_color::String="#999",
        node_colors::Union{Vector{String}, Nothing}=nothing,
        node_stroke::Union{String, Nothing} = nothing,
        node_strokes::Union{Vector{String}, Nothing}=nothing,
        stroke_width::Real=0,
        stroke_widths::Union{Vector{<:Real}, Nothing}=nothing,
        node_opacity::Real=1,
        node_opacities::Union{Vector{<:Real}, Nothing}=nothing,
        stroke_opacity::Real=1,
        stroke_opacities::Union{Vector{<:Real}, Nothing}=nothing,
        with_node_labels::Bool=false,
        node_labels::Union{Vector{String}, Nothing}=nothing,
        with_node_metadata_hover::Bool=false,
        with_node_weight::Bool=false,
        he_colors::Union{Vector{String}, Nothing}=nothing,
        with_he_labels::Bool=false,
        he_labels::Union{Vector{String}, Nothing}=nothing,
        with_he_metadata_hover::Bool=false
    )

    jsonified_hg, stringified_hg = _jsonify(h; tostring=true)

    w = widget_graph(
        stringified_hg,
        element;
        width=width,
        height=height,
        radius=radius,
        node_radii=node_radii,
        node_color=node_color,
        node_colors=node_colors,
        node_stroke=node_stroke,
        node_strokes=node_strokes,
        stroke_width=stroke_width,
        stroke_widths=stroke_widths,
        node_opacity=node_opacity,
        node_opacities=node_opacities,
        stroke_opacity=stroke_opacity,
        stroke_opacities=stroke_opacities,
        with_node_labels=with_node_labels,
        node_labels=node_labels,
        with_node_metadata_hover=with_node_metadata_hover,
        with_node_weight=with_node_weight,
        he_colors=he_colors,
        with_he_labels=with_he_labels,
        he_labels=he_labels,
        with_he_metadata_hover=with_he_metadata_hover
        )

    display(w)
end


"""
    jsonify(h::Hypergraph; tostring::Bool=false)

Transform a hypergraph `h` into a dictionary `d`.
If `tostring` is true, a jsonified string version of `d` will also be returned.

**Example**

h = Hypergraph{Float64}(7,4)
h[1:3,1] .= 1.5
h[6:7,1] .= 1
h[3,4] = 2.5
h[2,3] = 3.5
h[4,3:4] .= 4.5
h[5,4] = 5.5
h[5,2] = 6.5

jsonify(h)

Dict{Symbol,Any} with 4 entries:
  :nVertices   => 7
  :nHyperedges => 4
  :vertices    => Dict{Int64,Any}(
    7 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(1=>1.0))
    4 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(4=>4.5,3=>4.5))
    2 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(3=>3.5,1=>1.5))
    3 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(4=>2.5,1=>1.5))
    5 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(4=>5.5,2=>6.5))
    6 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(1=>1.0))
    1 => Dict{Symbol,Any}(:metadata=>nothing,:hyperedges=>Dict(1=>1.5))
  )
  :hyperedges  => Dict{Int64,Any}(
    4 => Dict{Symbol,Any}(:metadata=>nothing,:vertices=>Dict(4=>4.5,3=>2.5,5=>5.5))
    2 => Dict{Symbol,Any}(:metadata=>nothing,:vertices=>Dict(5=>6.5))
    3 => Dict{Symbol,Any}(:metadata=>nothing,:vertices=>Dict(4=>4.5,2=>3.5))
    1 => Dict{Symbol,Any}(:metadata=>nothing,:vertices=>Dict(7=>1.0,2=>1.5,3=>1.5,6=>1.0,1=>1.5))
  )
"""
function _jsonify(h::Hypergraph; tostring::Bool=false)
    jsonified_hg = Dict{Symbol, Any}()

    jsonified_hg[:nVertices] = nhv(h)
    jsonified_hg[:nHyperedges] = nhe(h)

    for v = 1:nhv(h)
        vDict = Dict{Symbol, Any}()

        vDict[:hyperedges] = gethyperedges(h, v)
        vDict[:metadata] = get_vertex_meta(h, v)

        push!(
            get!(jsonified_hg, :vertices, Dict{Int, Any}()),
            v => vDict
        )
    end

    for he = 1:nhe(h)
        heDict = Dict{Symbol, Any}()

        heDict[:vertices] = getvertices(h, he)
        heDict[:metadata] = get_hyperedge_meta(h, he)

        push!(
            get!(jsonified_hg, :hyperedges, Dict{Int, Any}()),
            he => heDict
        )
    end

    if tostring
        return jsonified_hg, JSON.json(jsonified_hg)
    end

    jsonified_hg
end



"""
    draw(
        h::Hypergraph,
        type::Type{HyperNetX};
        width::Int=10,
        height::Int=10,
        node_labels::Union{Dict{Int, String}, Nothing}=nothing,
        edge_labels::Union{Dict{Int, String}, Nothing}=nothing,
        collapse_nodes::Bool=false,
        collapse_edges::Bool=false,
        pos::Union{Dict{Int,Pair{Int,Int}}, Nothing}=nothing,
        with_color::Bool=true,
        with_node_counts::Bool=false,
        with_edge_counts::Bool=false,
        layout::PyObject=nx.spring_layout,
        layout_kwargs::Dict=Dict{String, Any}(),
        ax::Union{PyObject, Nothing}=nothing,
        no_border::Bool=false,
        edges_kwargs::Dict=Dict{String, Any}(),
        nodes_kwargs::Dict=Dict{String, Any}(),
        edge_labels_kwargs::Dict=Dict{String, Any}(),
        node_labels_kwargs::Dict=Dict{String, Any}(),
        with_edge_labels::Bool=true,
        with_node_labels::Bool=true,
        label_alpha::Float64=.35
        )

 Draw a hypergraph `h` as an Euler diagram, using the library [HyperNetX](https://github.com/pnnl/HyperNetX).

 **Arguments**

 * `h` : the hypergraph to draw
 * `type` : how the hypergraph will be drawn. If `type=HyperNetX`, the hypergraph will be represented as a Euler Diagram
 * `width` : width of the figure
 * `height` : height of the figure
 * `node_labels` : node labels to be shown
 * `edge_labels` : edge labels to be shown
 * `collapse_nodes` : draws the hypergraph gotten by identifying nodes contained by the same edges (from HyperNetX)
 * `collapse_edges` : draws the hypergraph gotten by identifying edges containing the same nodes (from HyperNetX)
 * `no_border` : indicates wheter the figure should have a border

For more details about the other parameters, please refer to the library [HyperNetX](https://github.com/pnnl/HyperNetX).
"""
function draw(
        h::Hypergraph,
        type::Type{HyperNetX};
        width::Int=10,
        height::Int=10,
        node_labels::Union{Dict{Int, String}, Nothing}=nothing,
        edge_labels::Union{Dict{Int, String}, Nothing}=nothing,
        collapse_nodes::Bool=false,
        collapse_edges::Bool=false,
        pos::Union{Dict{Int,Pair{Int,Int}}, Nothing}=nothing,
        with_color::Bool=true,
        with_node_counts::Bool=false,
        with_edge_counts::Bool=false,
        layout::PyObject=nx.spring_layout,
        layout_kwargs::Dict=Dict{String, Any}(),
        ax::Union{PyObject, Nothing}=nothing,
        no_border::Bool=false,
        edges_kwargs::Dict=Dict{String, Any}(),
        nodes_kwargs::Dict=Dict{String, Any}(),
        edge_labels_kwargs::Dict=Dict{String, Any}(),
        node_labels_kwargs::Dict=Dict{String, Any}(),
        with_edge_labels::Bool=true,
        with_node_labels::Bool=true,
        label_alpha::Float64=.35
        )

    h_hnx = _convert_to_hnx(h;
        node_labels=node_labels,
        edge_labels=edge_labels
        )

    if collapse_nodes
        h_hnx = h_hnx.collapse_nodes()
    end
    if collapse_edges
        h_hnx = h_hnx.collapse_edges()
    end

    if isnothing(ax)
        fig = plt.figure(figsize=[width,height])
        ax = plt.gca()

        if no_border
            ax.axis("off")
        end
    end

    hnx.draw(h_hnx,
        pos=pos,
        with_color=with_color,
        with_node_counts=with_node_counts,
        with_edge_counts=with_edge_counts,
        layout=layout,
        layout_kwargs=layout_kwargs,
        ax=ax,
        edges_kwargs=edges_kwargs,
        nodes_kwargs=nodes_kwargs,
        edge_labels_kwargs=edge_labels_kwargs,
        node_labels_kwargs=node_labels_kwargs,
        with_edge_labels=with_edge_labels,
        with_node_labels=with_node_labels,
        label_alpha=label_alpha
    )
end


"""
    _convert_to_hnx(
        h::Hypergraph;
        node_labels::Union{Dict{Int, String}, Nothing}=nothing,
        edge_labels::Union{Dict{Int, String}, Nothing}=nothing,
    )

Convert a SimpleHypergraphs hypergraph `h` into a HyperNetX hypergraph `h_hnx`.
`node_labels` represents vertex ids in `h_hnx`. If `node_labels` is none,
h's vertex ids will be used.
`edge_labels` represent edge ids in `h_hnx`. If `edge_labels` is none,
h's edge ids will be used.
"""
function _convert_to_hnx(h::Hypergraph;
        node_labels::Union{Dict{Int, String}, Nothing}=nothing,
        edge_labels::Union{Dict{Int, String}, Nothing}=nothing,
        )

    h_hnx = hnx.Hypergraph()

    for he=1:nhe(h)
        if isnothing(node_labels)
            vertices = collect(keys(getvertices(h, he)))
        else
            vertices = [get(node_labels, v, v) for v in collect(keys(getvertices(h, he)))]
        end

        if isnothing(edge_labels)
            he_hnx = hnx.Entity(string(he), elements=vertices)
        else
            he_hnx = hnx.Entity(get(edge_labels, he, string(he)), elements=vertices)
        end

        h_hnx.add_edge(he_hnx)
    end

    h_hnx
end
