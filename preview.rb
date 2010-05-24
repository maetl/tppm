require 'rubygems'
require 'sinatra'

before do
  content_type "text/html", :charset => "utf-8"
end

get "/" do
  "The Personal Publishing Manifest"
end

get "/preview/elements" do
  erb :elements
end