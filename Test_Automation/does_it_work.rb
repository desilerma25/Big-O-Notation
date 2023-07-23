require 'rubygems'
require 'selenium-webdriver'
# seleniun framework
require 'rspec'
# adds structure
require 'webdrivers'
# webdrivers gem runs selenium tests more easily w/ auto installation and updates for all supported webdrivers including:
# chromedriver, geckodriver,IEDriverServer, and msedgedriver
# the drivers will now be auto downloaded or updated when you launch a browser through Selenium

driver = Selenium::Webdriver.for :chrome
# creates driver instance
driver.navigate.to "http://ec2-54-208-152-154.compute-1.amazonaws.com/"
# launches browser

# driver.close
# closes browser
# run test by running rspec does_it_work.rb in terminal