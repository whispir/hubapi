# Whispir Information Hub API

> API Availability

> > The Whispir Information Hub API will soon be launching GA in November 2016.

> > The swagger definition for this API can be found [here](https://whispirinfohub.herokuapp.com/docs).

Whispir's Information Hub is the first of three major product releases that rapidly increase the speed of communictions within your business.

The Information Hub API allows users to create a personalised information management area within the Whispir Platform, where information sources can be configured to drive communications.

* Set up information feeds (RSS, XML, JSON) to be checked on a regular schedule and drive workflows when new information is available.
* Create dynamic endpoints and insert data in your existing format, then use this information directly in your communications.
* Dynamically invoke workflows within the Whispir Platform, using Whispir Events, Rich Messages and Portals to round out your effective communications experience.

## Source Management API

The Whispir Source/Feed API gives developers the ability to:

* Plug in existing information sources hosted at HTTP or FTP locations.
* Pull information in RSS, JSON or XML format
* Push documents into the source in JSON format
* Store the retrieved information in our search engine for retrieval
* Execute workflows on new information being inserted

## API Core Features

- Restful JSON API over HTTPS (TLS 1.2)
- Authenticated using JWT (via `auth` and `renew` endpoints)
