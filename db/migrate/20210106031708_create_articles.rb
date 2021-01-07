class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :content
      t.integer :viewers
      t.integer :rating

      t.timestamps
    end
  end
end
