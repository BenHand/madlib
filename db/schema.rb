# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150619203752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "inspirations", force: :cascade do |t|
    t.string   "inspire",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mad_quotes", force: :cascade do |t|
    t.string   "fun_quote",                                null: false
    t.string   "fun_author",        default: "Fun Author", null: false
    t.integer  "user_id"
    t.integer  "original_quote_id"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

  add_index "mad_quotes", ["original_quote_id"], name: "index_mad_quotes_on_original_quote_id", using: :btree
  add_index "mad_quotes", ["user_id"], name: "index_mad_quotes_on_user_id", using: :btree

  create_table "original_quotes", force: :cascade do |t|
    t.string   "quote",                             null: false
    t.string   "input_quote",                       null: false
    t.string   "author",      default: "Anonymous", null: false
    t.string   "category",    default: "General",   null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",                              null: false
    t.string   "email",                             null: false
    t.string   "password_digest",                   null: false
    t.text     "bio",             default: "bio",   null: false
    t.string   "pic_url",         default: "blank", null: false
    t.integer  "quote_count",     default: 0,       null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  add_foreign_key "mad_quotes", "original_quotes"
  add_foreign_key "mad_quotes", "users"
end
