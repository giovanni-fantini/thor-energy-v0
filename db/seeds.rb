# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'nokogiri'

ChargingStation.delete_all

url = 'https://www.doogal.co.uk/london_stations.php'
html_file = open(url).read
html_doc = Nokogiri::HTML(html_file)

i = 0

html_doc.search('tbody tr').each do |row|
  i += 1
  if i < 200
    ChargingStation.create!(location_title: row.search('td')[0].text, address: row.search('td')[2].text + ", London, UK", status: true, capacity: 1, battery_count: 1)
  end
end


# ChargingStation.delete_all
# ChargingStation.create!(location_title: "Le Wagon", address: "138 Kingsland Road, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Google Campus", address: " 4-5 Bonhill St, Shoreditch, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Singer Tavern", address: "1 City Rd, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Kings Cross", address: "Kings Cross, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Wembley Stadium", address: "Wembley Stadium, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Buckingham Palace", address: "Buckingham Palace, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Brailsford Road", address: "Brailsford Road, London", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Heathrow, Terminal 5", address: "Heathrow Airport (LHR), Terminal 5, Wallis Road, Longford, Hounslow, UK", status: true, capacity: 1, battery_count: 1)

# ChargingStation.create!(location_title: "Paddington Station", address: "Paddington Station, Praed Street, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "High Street, Kensington", address: "High Street Kensington, Kensington High Street, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Shepherd's Bush", address: "Shepherd's Bush, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "London City Airport", address: "London City Airport, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "O2 Arena", address: "The Millenium Dome, Millenium Way, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Sidcup Station", address: "Sidcup Station, Sidcup, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Southwark Station", address: "Southwark Station, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Harrods", address: "Harrods, Knightsbridge, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Hampstead Station", address: "Hampstead Station, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Enfield Town Station", address: "Enfield Town Station, Enfield, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Westfield Shopping Centre", address: "Westfield Shopping Centre, Ariel Way, London, UK", status: true, capacity: 1, battery_count: 1)
# ChargingStation.create!(location_title: "Stamford Brook Station", address: "Stamford Brook Station, Goldhawk Road, London, UK", status: true, capacity: 1, battery_count: 1)
