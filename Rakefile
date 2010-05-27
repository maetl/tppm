require 'cssmin'
require 'jsmin'

desc "base stylesheet generator"
task :build_css do
  sh "sass src/css/base.scss src/tppm.css"
end

desc "minify browser hacks"
task :compress_hacks do
  input = 'src/css/browsers.css'
  output = 'ui/css/browsers.css'
  File.open(input, 'r') do |i|
    File.open(output, 'w') {|o| o << CSSMin.minify(i) }
  end  
end

desc "compress stylesheets code"
task :compress_css => :build_css do
  input = 'src/tppm.css'
  output = 'ui/css/tppm.css'
  File.open(input, 'r') do |i|
    File.open(output, 'w') {|o| o << CSSMin.minify(i) }
  end
end

desc "compress javascript code"
task :compress_js do
  input = 'src/tppm.js'
  output = 'ui/js/tppm.js'
  File.open(input, 'r') do |i|
    File.open(output, 'w') {|o| o << JSMin.minify(i) }
  end
end

desc "Compress all UI assets"
task :compress => [:compress_js, :compress_css, :compress_hacks]
task :default => :compress