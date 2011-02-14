# 
# Preview app. Basically, a blow-up balloon
# demonstrating the different templates and input elements.
#
require 'rubygems'
require 'sinatra'
require 'faker'

set :public, File.dirname(__FILE__)
set :views, Proc.new { File.join(root, "src/tpl") }

helpers do
  def embed(tpl, options={})
    erb tpl, options.merge!(:layout => false)
  end
end

before do
  content_type "text/html", :charset => "utf-8"
end

get "/" do
  "The Personal Publishing Manifest"
end

get "/preview/construction" do
  # incomplete
  erb :construction
end

get "/preview/blog" do
  # incomplete
  erb :blog
end

get "/preview/pictures" do
  # incomplete
  erb :pictures
end

get "/preview/elements" do
  erb :elements
end

get "/preview/dashboard" do
  erb :dashboard
end