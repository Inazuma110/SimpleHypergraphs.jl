var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference-1","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"CurrentModule = SimpleHypergraphs\nDocTestSetup = quote\n    using SimpleHypergraphs\nend","category":"page"},{"location":"reference/#Creating-a-hypergraph-1","page":"Reference","title":"Creating a hypergraph","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"Hypergraph","category":"page"},{"location":"reference/#SimpleHypergraphs.Hypergraph","page":"Reference","title":"SimpleHypergraphs.Hypergraph","text":"Hypergraph{T} <: AbstractMatrix{Union{T, Nothing}}\n\nA hypergraph storing information about vertices and hyperedges.\n\nConstructors\n\nHypergraph{T}(n,k) where {T<:Real}\nHypergraph{T,V}(n, k;\n    v_meta=Vector{Union{V,Nothing}}(nothing, n)\n    ) where {T<:Real, V}\nHypergraph{T,V,E}(n, k;\n    v_meta=Vector{Union{V,Nothing}}(nothing, n),\n    he_meta=Vector{Union{E,Nothing}}(nothing, k)\n    ) where {T<:Real, V, E}\n\nConstruct a hypergraph with a given number of vertices and hyperedges. Optionally, values of type V can be stored at vertices and values of type E can be stored at hyperedges.\n\nHypergraph(m::AbstractMatrix{Union{T, Nothing}}) where {T<:Real}\nHypergraph{V}(m::AbstractMatrix{Union{T, Nothing}};\n    v_meta=Vector{Union{V,Nothing}}(nothing, size(m,1))\n    ) where {T<:Real, V}\nHypergraph{V, E}(m::AbstractMatrix{Union{T, Nothing}};\n    v_meta=Vector{Union{V,Nothing}}(nothing, size(m,1)),\n    he_meta=Vector{Union{E,Nothing}}(nothing, size(m,2))\n    ) where {T<:Real, V, E}\n\nConstruct a hypergraph using its matrix representation. In the matrix representation rows are vertices and columns are hyperedges. Optionally, values of type V can be stored at vertices and values of type E can be stored at hyperedges.\n\nHypergraph(g::LightGraphs.Graph)\n\nConstructs a hypergraph of degree 2 by making a deep copy of LightGraphs.Graph\n\nArguments\n\nT : type of weight values stored in the hypergraph\nV : type of values stored in the vertices of the hypergraph\nE : type of values stored in the edges of the hypergraph\nn : number of vertices\nk : number of hyperedges\nm : a matrix representation rows are vertices and columns are hyperedges\n\n\n\n\n\n","category":"type"},{"location":"reference/#Manipulating-vertices-and-hyperedges-1","page":"Reference","title":"Manipulating vertices and hyperedges","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"\nadd_hyperedge!(::Hypergraph{T, V, E}; ::Dict{Int,T}, ::Union{E,Nothing} ) where {T <: Real, V, E}\nadd_vertex!(::Hypergraph{T, V, E};::Dict{Int,T},::Union{V,Nothing} ) where {T <: Real, V, E}\nset_vertex_meta!(::Hypergraph{T, V, E}, ::Union{V,Nothing}, ::Int) where {T <: Real, V, E}\nget_vertex_meta(::Hypergraph{T, V, E}, ::Int) where {T <: Real, V, E}\nset_hyperedge_meta!(::Hypergraph{T, V, E}, ::Union{E,Nothing}, ::Int) where {T <: Real, V, E}\nget_hyperedge_meta(::Hypergraph{T, V, E}, ::Int) where {T <: Real, V, E}\nremove_vertex!(::Hypergraph, ::Int)","category":"page"},{"location":"reference/#SimpleHypergraphs.add_hyperedge!-Union{Tuple{Hypergraph{T,V,E}}, Tuple{E}, Tuple{V}, Tuple{T}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.add_hyperedge!","text":"add_hyperedge!(h::Hypergraph{T, V, E}; vertices::Dict{Int,T} = Dict{Int,T}(),\n               he_meta::Union{E,Nothing}=nothing) where {T <: Real, V, E}\n\nAdds a hyperedge to a given hypergraph h. Optionally, existing vertices can be added to the created hyperedge. The paramater vertices represents a dictionary of vertex identifiers and values stored at the hyperedges. Additionally, a value can be stored with the hyperedge using the he_meta keyword parameter.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.add_vertex!-Union{Tuple{Hypergraph{T,V,E}}, Tuple{E}, Tuple{V}, Tuple{T}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.add_vertex!","text":"add_vertex!(h::Hypergraph{T, V, E}; hyperedges::Dict{Int,T} = Dict{Int,T}(),\n            v_meta::Union{V,Nothing} = nothing) where {T <: Real, V, E}\n\nAdds a vertex to a given hypergraph h. Optionally, the vertex can be added to existing hyperedges. The hyperedges parameter presents a dictionary of hyperedge identifiers and values stored at the hyperedges. Additionally, a value can be stored with the vertex using the v_meta keyword parameter.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.set_vertex_meta!-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E},Union{Nothing, V},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.set_vertex_meta!","text":"set_vertex_meta!(h::Hypergraph{T, V, E}, new_value::Union{V,Nothing}, id::Int)\n    where {T <: Real, V, E}\n\nSets a new meta value new_value for the vertex id in the hypegraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.get_vertex_meta-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.get_vertex_meta","text":"get_vertex_meta(h::Hypergraph{T, V, E}, id::Int) where {T <: Real, V, E}\n\nReturns a meta value stored at the vertex id in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.set_hyperedge_meta!-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E},Union{Nothing, E},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.set_hyperedge_meta!","text":"set_hyperedge_meta!(h::Hypergraph{T, V, E}, new_value::Union{E,Nothing}, id::Int)\n    where {T <: Real, V, E}\n\nSets a new meta value new_value for the hyperedge id in the hypegraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.get_hyperedge_meta-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.get_hyperedge_meta","text":"get_hyperedge_meta(h::Hypergraph{T, V, E}, id::Int) where {T <: Real, V, E}\n\nReturns a meta value stored at the hyperedge id in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.remove_vertex!-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.remove_vertex!","text":"remove_vertex!(h::Hypergraph, v::Int)\n\nRemoves the vertex v from a given hypergraph h. Note that running this function will cause reordering of vertices in the hypergraph: the vertex v will replaced by the last vertex of the hypergraph and the list of vertices will be shrunk.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Hypergraph-array-getters-and-setters-1","page":"Reference","title":"Hypergraph array getters and setters","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"Normally you work with a hypergraph via array setters, for example the code below craete an Hypergraph and add vertex one to hyperedges 2 and 3 with weight 5:","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"h = Hypergraph{Int64}(2,3);\nh[1, 2:3] .= 5;  \nh\n\n# output\n\n2×3 Hypergraph{Int64,Nothing,Nothing}:\n nothing  5         5\n nothing   nothing   nothing","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"getindex(::Hypergraph, ::Vararg{Int,2})\nsetindex!(::Hypergraph, ::Nothing, ::Vararg{Int,2})\nsetindex!(::Hypergraph, ::Real, ::Vararg{Int,2})","category":"page"},{"location":"reference/#Base.getindex-Tuple{Hypergraph,Int64,Int64}","page":"Reference","title":"Base.getindex","text":"Base.getindex(h::Hypergraph, idx::Vararg{Int,2})\n\nReturns a value for a given vertex-hyperedge pair idx for a hypergraph h. If a vertex does not belong to a hyperedge nothing is returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.setindex!-Tuple{Hypergraph,Nothing,Int64,Int64}","page":"Reference","title":"Base.setindex!","text":"Base.setindex!(h::Hypergraph, ::Nothing, idx::Vararg{Int,2})\n\nRemoves a vertex from a given hyperedge for a hypergraph h and a given vertex-hyperedge pair idx. Note that trying to remove a vertex from a hyperedge when it is not present will not throw an error.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.setindex!-Tuple{Hypergraph,Real,Int64,Int64}","page":"Reference","title":"Base.setindex!","text":"Base.setindex!(h::Hypergraph, v::Real, idx::Vararg{Int,2})\n\nAdds a vertex to a hyperedge (represented by indices idx) and assigns value v to be stored with that assignment.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Hypergraph-representation-as-LightGraphs'-simple-graphs-1","page":"Reference","title":"Hypergraph representation as LightGraphs' simple graphs","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"The goal of those methods is to provide a way to manipulate a hypergraph using  the methods from the LightGraphs.jl library.  This has been achieved by providing types that are subtypes of the LightGraphs.SimpleGraphs.AbstractSimpleGraph{Int} type along with appropiate methods. ","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"BipartiteView\nshortest_path(::BipartiteView, ::Int, ::Int)\n\nTwoSectionView\nshortest_path(::TwoSectionView, ::Int, ::Int)","category":"page"},{"location":"reference/#SimpleHypergraphs.BipartiteView","page":"Reference","title":"SimpleHypergraphs.BipartiteView","text":"BipartiteView{T<:Real} <: LightGraphs.SimpleGraphs.AbstractSimpleGraph{Int}\n\nRepresents a bipartite view of a hypergraph h. Note this is a view - changes to the original hypergraph will be automatically reflected in the view.\n\nConstructors\n\nBipartiteView(::Hypergraph)\n\nThe bipartite view of a hypergraph is suitable for processing with the LightGraphs.jl package. Several LightGraphs methods are provided for the compability.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.shortest_path-Tuple{BipartiteView,Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.shortest_path","text":"shortest_path(b::BipartiteView,source::Int, target::Int)\n\nFinds a single shortest path in a graph b between vertices source and target. Note that if several paths of the same length exist, only one will be returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.TwoSectionView","page":"Reference","title":"SimpleHypergraphs.TwoSectionView","text":"TwoSectionView{T<:Real} <: LightGraphs.SimpleGraphs.AbstractSimpleGraph{Int64}\n\nRepresents a 2-section view of a hypergraph h. Note (1) this is a view - changes to the original hypergraph will be automatically reflected in the view.\n\nNote (2) The view will only work correctly for hypergraphs not having overlapping hyperedges. To check whether a graph has overlapping edges try has_overlapping_hedges(h) - for such graph  you need to fully materialize it rather than use a view.  This can be achieved via the get_twosection_adjacency_mx(h) method.\n\nConstructors\n\nTwoSectionView(::Hypergraph)\n\nThe 2-section view of a hypergraph is suitable for processing with the LightGraphs.jl package. Several LightGraphs methods are provided for the compability.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.shortest_path-Tuple{TwoSectionView,Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.shortest_path","text":"shortest_path(t::TwoSectionView,source::Int, target::Int)\n\nFinds a single shortest path in a graph b between vertices source and target. Note that if several paths of the same length exist, only one will be returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Hypergraph-info-1","page":"Reference","title":"Hypergraph info","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"size(::Hypergraph)\nnhv(::Hypergraph)\nnhe(::Hypergraph)\ngetvertices(::Hypergraph, ::Int)\ngethyperedges(::Hypergraph, ::Int)\n\nmodularity(::Hypergraph, ::Vector{Set{Int}}, ::SimpleHypergraphs.HypergraphAggs)\n\nSimpleHypergraphs.HypergraphAggs\n\nrandompartition(::Int64,::Int64)\nrandompartition(::Hypergraph,::Int64)\n\nAbstractCommunityFinder\nCFModularityRandom\nCFModularityCNMLike\n\nfindcommunities(::Hypergraph, ::CFModularityRandom)\nfindcommunities(::Hypergraph, ::CFModularityCNMLike)","category":"page"},{"location":"reference/#Base.size-Tuple{Hypergraph}","page":"Reference","title":"Base.size","text":"Base.size(h::Hypergraph)\n\nReturns the size of Hypergraph h. The result is a tuple of the number of vertices and the number of hyperedges\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.nhv-Tuple{Hypergraph}","page":"Reference","title":"SimpleHypergraphs.nhv","text":"nhv(h::Hypergraph{T, V, E}) where {T <: Real, V, E}\n\nReturn the number of vertices in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.nhe-Tuple{Hypergraph}","page":"Reference","title":"SimpleHypergraphs.nhe","text":"nhe(h::Hypergraph{T, V, E}) where {T <: Real, V, E}\n\nReturn the number of hyperedges in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.getvertices-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.getvertices","text":"getvertices(h::Hypergraph, he_id::Int)\n\nReturns vertices from a hypergraph a for a given hyperedge he_id.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.gethyperedges-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.gethyperedges","text":"gethyperedges(h::Hypergraph, v_id::Int)\n\nReturns hyperedges for a given vertex v_id in a hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#LightGraphs.modularity-Tuple{Hypergraph,Array{Set{Int64},1},SimpleHypergraphs.HypergraphAggs}","page":"Reference","title":"LightGraphs.modularity","text":"LightGraphs.modularity(h::Hypergraph, partition::Vector{Set{Int}},\n\nha::HypergraphAggs=HypergraphAggs(h))\n\nCalculates the strict modularity of a hypergraph h for a given partition using the precomputed aggregates ha.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.HypergraphAggs","page":"Reference","title":"SimpleHypergraphs.HypergraphAggs","text":"HypergraphAggs(h::Hypergraph)\n\nPrecomputes vertex and edge basic stats for a hypergraph. The stats are being used for efficiency reasons by community search algorithms.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.randompartition-Tuple{Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.randompartition","text":"randompartition(N::Int, n::Int)::Vector{Set{Int}}\n\nGenerates a random partition for graph having N vertices into n subsets.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.randompartition-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.randompartition","text":"randompartition(h::Hypergraph, n::Int)::Vector{Set{Int}}\n\nGenerates a random partition for vertices of a hypergraph h into n subsets.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.AbstractCommunityFinder","page":"Reference","title":"SimpleHypergraphs.AbstractCommunityFinder","text":"The base type for all algorithms representing various community search patterns. \n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.CFModularityRandom","page":"Reference","title":"SimpleHypergraphs.CFModularityRandom","text":"CFModularityRandom(n::Int, reps::Int) <: AbstractCommunityFinder\n\nRepresents a random search over the hypergraph h that finds a partition into n communities (subsets) having the maximum modularity value. During the search reps random n-partitions will be evaluated. If there are many partitions having the same value the first one that was randomly found will be returned.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.CFModularityCNMLike","page":"Reference","title":"SimpleHypergraphs.CFModularityCNMLike","text":"CFModularityCNMLike(n::Int, reps::Int) <: AbstractCommunityFinder\n\nRepresents a CNM-Like algorithm for finding communities.  In the algorithm we start with a partition where each node is in its own part. Then in each step, we randomly select a hyperedge. Subsequently, we consider merging each set of that parts it touches. We actually merge the parts if the new best modularity is at least as high as the modularity from the previous step. The algortithm iterates through reps of repetitions.\n\nFor more information see Algorithm 1 at: Clustering via Hypergraph Modularity (submitted to Plos ONE), auhtors: Bogumil Kaminski, Valerie Poulin, Pawel Pralat, Przemyslaw Szufel, Francois Theberge\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.findcommunities-Tuple{Hypergraph,CFModularityRandom}","page":"Reference","title":"SimpleHypergraphs.findcommunities","text":"findcommunities(h::Hypergraph, method::CFModularityRandom)\n\nMakes a random search over the hypergraph h and finds a partition into method.n communities (subsets) having the maximum modularity value. During the search method.reps random n-partitions will be evaluated. If there are many partitions having the same value the first one that was randomly found will be returned.\n\nReturns a NamedTuple where the field bp contains partition and the field bm contains the modularity value for that partition.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.findcommunities-Tuple{Hypergraph,CFModularityCNMLike}","page":"Reference","title":"SimpleHypergraphs.findcommunities","text":"findcommunities(h::Hypergraph, method::CFModularityCNMLike)\n\nIterates a CNM-Like algorithm for finding communities.  In the algorithm we start with a partition where each node is in its own part. Then in each step, we randomly select a hyperedge.   Subsequently, we consider merging each set of that parts it touches.  We actually merge the parts if the new best modularity is at least as high as the modularity from the previous step. \n\nReturns a NamedTuple where the field bp contains partition and the field bm contains the modularity value for that partition, finally, the fiel mod_history represents modularities achieved  in subsequent steps of the algorithm.\n\nFor more information see Algorithm 1 at: Clustering via Hypergraph Modularity (submitted to Plos ONE), authors: Bogumil Kaminski, Valerie Poulin, Pawel Pralat, Przemyslaw Szufel,  Francois Theberge.\n\n\n\n\n\n","category":"method"},{"location":"reference/#I/O-1","page":"Reference","title":"I/O","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"hg_save\nhg_load","category":"page"},{"location":"reference/#SimpleHypergraphs.hg_save","page":"Reference","title":"SimpleHypergraphs.hg_save","text":"hg_save(io::IO, h::Hypergraph)\n\nSaves a hypergraph h to an output stream io.\n\n\n\n\n\nhg_save(fname::AbstractString, h::Hypergraph)\n\nSaves a hypergraph h to a file fname.\n\n\n\n\n\n","category":"function"},{"location":"reference/#SimpleHypergraphs.hg_load","page":"Reference","title":"SimpleHypergraphs.hg_load","text":"hg_load(fname::AbstractString, T::Type{<:Real})\n\nLoads a hypergraph from a stream io. The second argument T represents type of data in the hypegraph.\n\nSkips an initial comment.\n\n\n\n\n\nhg_load(fname::AbstractString, T::Type{<:Real})\n\nLoads a hypergraph from a file fname. The second argument T represents type of data in the hypegraph\n\n\n\n\n\n","category":"function"},{"location":"reference/#","page":"Reference","title":"Reference","text":"DocTestSetup = nothing","category":"page"},{"location":"#SimpleHypergraphs.jl-1","page":"SimpleHypergraphs.jl","title":"SimpleHypergraphs.jl","text":"","category":"section"},{"location":"#","page":"SimpleHypergraphs.jl","title":"SimpleHypergraphs.jl","text":"Documentation for SimpleHypergraphs.jl","category":"page"},{"location":"#","page":"SimpleHypergraphs.jl","title":"SimpleHypergraphs.jl","text":"For details please go to the Reference section.","category":"page"}]
}
