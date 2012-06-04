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
    @js= File.read("public/javascripts/bubble_sort.js")
    @coffee= File.read("public/javascripts/bubble_sort.coffee")

    slim :bubble_sort, :locals => {
      coffee: @coffee,
      js: @js
    },
      :layout => false

  end

end
