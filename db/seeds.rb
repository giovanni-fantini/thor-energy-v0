# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ChargingStation.delete_all
ChargingStation.create!(location_title: "Le Wagon", address: "138 Kingsland Road, London", status: true, capacity: 1, battery_count: 1)
ChargingStation.create!(location_title: "Google Campus", address: " 4-5 Bonhill St, Shoreditch, London", status: true, capacity: 1, battery_count: 1)
ChargingStation.create!(location_title: "Singer Tavern", address: "1 City Rd, London", status: true, capacity: 1, battery_count: 1)
