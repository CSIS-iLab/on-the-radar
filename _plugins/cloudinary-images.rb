# Finds images in markdown files and replace them with a cloudinary responsive image include
Jekyll::Hooks.register :documents, :pre_render do |post, payload|
  docExt = post.extname.tr('.', '')
  # only process if we deal with a markdown file
  if payload['site']['markdown_ext'].include? docExt
    newContent = post.content.gsub(/\!\[(.*)?\]\((.*?)(?=\"|\))(\".*\")?\)/, '{% include cloudinary-responsive-img.html title=\3 alt="\1" path="\2" %}')
    post.content = newContent
  end
end