require 'rubygems'
require 'sinatra'

set :public, File.dirname(__FILE__)
set :views, Proc.new { File.join(root, "tpl") }

before do
  content_type "text/html", :charset => "utf-8"
end

get "/" do
  "The Personal Publishing Manifest"
end

get "/preview/elements" do
  erb :elements
end