class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :User
      t.string :bill_id
      t.integer :vote

      t.timestamps
    end
  end
end
