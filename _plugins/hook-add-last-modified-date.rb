# Finds images in markdown files and replace them with a cloudinary responsive image include
Jekyll::Hooks.register :documents, :pre_render do |post|

  # get the current post last modified time
  modification_time = File.mtime( post.path )

  # inject modification_time in post's datas.
  post.data['last-modified-date'] = modification_time

end
