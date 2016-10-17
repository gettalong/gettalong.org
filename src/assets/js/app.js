<%
data = {'siblings' => true, sort: true, 'alcn' => context.ref_node.parent.alcn + "*.js",
        'not' => {'alcn' => context.ref_node.alcn}}
context.website.ext.item_tracker.add(context.dest_node, :nodes, :node_finder_option_set,
                                     {opts: data, ref_alcn: context.ref_node.alcn}, :content)
context.website.ext.node_finder.find(data, context.node).each do |node| %>
<%= node.node_info[:path].data %>
<% end %>
