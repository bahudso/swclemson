class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.references :User
      t.string :tag

      t.timestamps
    end
  end
end
