require 'rubygems'
require 'sinatra/base'
require 'slim'
require 'sass'
require 'coderay'


Slim::Engine.set_default_options :sections => false

class App < Sinatra::Base

  set :public, File.join(File.dirname(__FILE__), 'public')
  set :views, File.join(File.dirname(__FILE__), 'views')

  helpers do
    def partial(page, options={})
      haml page, options.merge!(:layout => false)
    end
  end


  get('/') do
    @implementation = File.read("public/javascripts/bubble_sort.js")
    slim :bubble_sort, :locals => {:implementation => @implementation}, :layout => false
  end

end
