class UsersController < ApplicationController
	class AddAuthenticationTokenToUser < ActiveRecord::Migration
    def change
        add_column :users, :authentication_token, :string
      end
    end

	def new
	end

	def create
	end
end
