FORMAT: 1A

# Listen Together(v3)

Allow kkbox members to view listen-together pages and follow hosts

# Group Host

## Host Collection [/host/{member_id}]

+ Parameters

    + member_id: 8q3_xzjl89Yakn_7GB (string, required) - Unique identifier for a member


### Get host information [GET]

+ Response 200 (application/json)

	+ Body

		{
			"id": "8q3_xzjl89Yakn_7GB",
			"page_url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
			"room_url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
			"images": [
				{
		  			"height": 160,
		  			"width": 160,
		  			"url": "https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg"
				}
			],
			"name": "Diana Wang 王詩安",
			"description": "我的新單曲【一步成詩】上架了！",
			"territory": "TW",
			"follower_count": 42589,
			"following_count": 66
		}

	+ Schema
		{
			"type": "object",
			"properties": {
				"id": {
		            "type": "string"
		        },
		        "page_url": {
		            "type": "string"
		        },
		        "room_url": {
		            "type": "string"
		        },
		        "images": {
		        	"type": "array",
		        	"items": {
		                "type": "object",
		                "properties": {
		                	"height": {
		                		"type": "number"
		                	},
		                	"width": {
		                		"type": "number"
		                	},
		                	"url": {
					            "type": "string"
					        }
		                }
		            }
		        },
		        "name": {
		            "type": "string"
		        },
		        "description": {
		            "type": "string"
		        },
		        "territory": {
		            "type": "string"
		        },
		        "follower_count": {
		            "type": "number"
		        },
		        "following_count": {
		            "type": "number"
		        }
			}

		}

### Create host [POST]

+ Request (application/json)

	+ Attributes (object)
        + images: (array, required)
        	+ (object)
        		+ height: 160 (number)
        		+ width: 160 (number)
        		+ url: https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg (string)
        + name: Diana Wang 王詩安 (string, required)
        + description: 我的新單曲【一步成詩】上架了！ (string)
        + territory: TW (string, required) - Territory code, i.e. TW, HK, SG, MY, JP

	+ Body

		{
			"images": [
				{
		  			"height": 160,
		  			"width": 160,
		  			"url": "https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg"
				}
			],
			"name": "Diana Wang 王詩安",
			"description": "我的新單曲【一步成詩】上架了！",
			"territory": "TW"
		}


+ Response 201 (application/json)

    + Body
    	{
    		"id": "8q3_xzjl89Yakn_7GB",
			"page_url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
			"room_url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
			"images": [
				{
		  			"height": 160,
		  			"width": 160,
		  			"url": "https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg"
				}
			],
			"name": "Diana Wang 王詩安",
			"description": "我的新單曲【一步成詩】上架了！",
			"territory": "TW"
		}

	+ Schema
		{
			"type": "object",
			"properties": {
				"id": {
		            "type": "string"
		        },
		        "page_url": {
		            "type": "string"
		        },
		        "room_url": {
		            "type": "string"
		        },
		        "images": {
		        	"type": "array",
		        	"items": {
		                "type": "object",
		                "properties": {
		                	"height": {
		                		"type": "number"
		                	},
		                	"width": {
		                		"type": "number"
		                	},
		                	"url": {
					            "type": "string"
					        }
		                }
		            }
		        },
		        "name": {
		            "type": "string"
		        },
		        "description": {
		            "type": "string"
		        },
		        "territory": {
		            "type": "string"
		        }
			}

		}


### Update host information [PUT]

+ Request (application/json)

	+ Attributes (object)
        + images: (array, required)
        	+ (object)
        		+ height: 160 (number)
        		+ width: 160 (number)
        		+ url: https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg (string)
        + name: Diana Wang 王詩安 (string, required)
        + description: 我的新單曲【一步成詩】上架了！ (string)
        + territory: TW (string, required) - Territory code, i.e. TW, HK, SG, MY, JP

	+ Body

		{
			"images": [
				{
		  			"height": 160,
		  			"width": 160,
		  			"url": "https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg"
				}
			],
			"name": "Diana Wang 王詩安",
			"description": "我的新單曲【一步成詩】上架了！",
			"territory": "TW"
		}


+ Response 200 (application/json)

    + Body

		{
			"id": "8q3_xzjl89Yakn_7GB",
			"page_url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
			"room_url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
			"images": [
				{
		  			"height": 160,
		  			"width": 160,
		  			"url": "https://i.kfs.io/artist/global/26407,0v3/fit/160x160.jpg"
				}
			],
			"name": "Diana Wang 王詩安",
			"description": "我的新單曲【一步成詩】上架了！",
			"territory": "TW"
		}

	+ Schema
		{
			"type": "object",
			"properties": {
				"id": {
		            "type": "string"
		        },
		        "page_url": {
		            "type": "string"
		        },
		        "room_url": {
		            "type": "string"
		        },
		        "id": {
		            "type": "string"
		        },
		        "images": {
		        	"type": "array",
		        	"items": {
		                "type": "object",
		                "properties": {
		                	"height": {
		                		"type": "number"
		                	},
		                	"width": {
		                		"type": "number"
		                	},
		                	"url": {
					            "type": "string"
					        }
		                }
		            }
		        },
		        "name": {
		            "type": "string"
		        },
		        "description": {
		            "type": "string"
		        },
		        "territory": {
		            "type": "string"
		        },
			}

		}


### Delete host [DELETE]

+ Response 204


## Host Shared-playlists Collection [/host/{member_id}/shared-playlists]

+ Parameters

    + member_id: 8q3_xzjl89Yakn_7GB (string, required) - Unique identifier for a member

### Get host shared-playlists [GET]

+ Response 200 (application/json)

	+ Body

		{
		 	"data": [
			    {
			      	"id": "OrZNXB5eLG7iPlkRfm",
			      	"name": "一步成詩",
			      	"url": "https://event.kkbox.com/content/album/OrZNXB5eLG7iPlkRfm",
			      	"images": [
				        {
				        	"height": 160,
				        	"width": 160,
				        	"url": "https://i.kfs.io/album/tw/32394,0v1/fit/160x160.jpg"
				        }
				    ]
			    }
			],
			"summary": {
				"total": 100
			}
		}

	+ Schema
		{
			"type": "object",
			"properties": {
				"data": {
		            "type": "array",
		            "items":{
			            "type": "object",
		                "properties": {
		                	"id": {
		                		"type": "string"
		                	},
		                	"name": {
		                		"type": "string"
		                	},
		                	"url": {
					            "type": "string"
					        },
					        "images": {
					        	"type": "array",
					        	"items": {
					                "type": "object",
					                "properties": {
					                	"height": {
					                		"type": "number"
					                	},
					                	"width": {
					                		"type": "number"
					                	},
					                	"url": {
								            "type": "string"
								        }
					                }
					            }
					        }
		                }
		            }
		        },
		        "summary": {
		            "type": "object",
		            "properties":{
		            	"total":{
		            		"type": number
		            	}
		            }
		        }
			}

		}


## Host Recent-tracks Collection [/host/{member_id}/recent-tracks]

+ Parameters

    + member_id: 8q3_xzjl89Yakn_7GB (string, required) - Unique identifier for a member

### Get host recently listening tracks [GET]

+ Response 200 (application/json)

	+ Body

		{
			"data": [
			    {
					"id": "OrZNXB5eLG7iPlkRfm",
					"name": "Midnight",
					"url": "https://event.kkbox.com/content/album/OrZNXB5eLG7iPlkRfm",
					"duration": 260493,
					"album": {
						"id": "WpTPGzNLeutVFHcFq6",
						"name": "Glasshouse",
						"url": "https://event.kkbox.com/content/album/WpTPGzNLeutVFHcFq6",
						"available_territories": [
							"TW",
							"TW",
							"TW"
						]
					},
					"artist": {
						"id": "8q3_xzjl89Yakn_7GB",
						"name": "Jessie Ware",
						"url": "https://event.kkbox.com/content/artist/8q3_xzjl89Yakn_7GB",
					}
				},	    
			],
			"paging": {
				"offset": 0,
				"limit": 5,
				"previous": "foo",
				"next": "https://api.kkbox.com/v1.1/artists/CluDKLYxr1GFQqLSZt/albums?limit=5&offset=5"
			},
			"summary": {
				"total": 100
			}
		}

	+ Schema
		{
			"type": "object",
			"properties": {
				"data": {
		            "type": "array",
		            "items":{
			            "type": "object",
		                "properties": {
		                	"id": {
		                		"type": "string"
		                	},
		                	"name": {
		                		"type": "string"
		                	},
		                	"url": {
					            "type": "string"
					        },
					        "duration": {
					            "type": "number"
					        },
					        "album": {
					            "type": "object",
					            "properties":{
					            	"id": {
				                		"type": "string"
				                	},
				                	"name": {
				                		"type": "string"
				                	},
				                	"url": {
							            "type": "string"
							        },
							        available_territories:{
							        	"type": "array",
							        	"items":{
							        		"type": "string"
							        	}
							        }
					            }
					        },
					        "artist": {
					            "type": "object",
					            "properties":{
					            	"id": {
				                		"type": "string"
				                	},
				                	"name": {
				                		"type": "string"
				                	},
				                	"url": {
							            "type": "string"
							        }
					            }
					        }
		                }
		            }
		        },
		        "paging":{
		        	"offset": {
                		"type": "number"
                	},
                	"limit":{
                		"type": "number"
                	},
                	"previous":{
                		"type": "string"
                	},
                	"next":{
                		"type": "string"
                	}
		        },
		        "summary": {
		            "type": "object",
		            "properties":{
		            	"total":{
		            		"type": number
		            	}
		            }
		        }
			}

		}

## Follower Collection [/host/{member_id}/followers/{my_member_id}]

+ Parameters

    + member_id: 8q3_xzjl89Yakn_7GB (string, required) - Unique identifier for a member
    + my_member_id: 8q3_xzjl89Yakn_7GB (string, required) - Unique identifier for a member

### Get followers' information [GET]

+ Response 200 (application/json)

	+ Body

		{
			"data": [
				{
					"id": "OrZNXB5eLG7iPlkRfm",
					"name": "張宇辰",
					"follower_count": 5,
					"url": "https://event.kkbox.com/content/album/OrZNXB5eLG7iPlkRfm",
					"images": [
						{
							"height": 160,
							"width": 160,
							"url": "https://i.kfs.io/album/tw/32394,0v1/fit/160x160.jpg"
						}
					],
					"is_me_following": false
				}
			],
			"paging": {
				"offset": 0,
				"limit": 5,
				"previous": "foo",
				"next": "https://api.kkbox.com/v1.1/artists/CluDKLYxr1GFQqLSZt/albums?limit=5&offset=5"
			},
			"summary": {
				"total": 584
			}
		}

	+ Schema
		{
			"type": "object",
			"properties": {
				"data": {
		            "type": "array",
		            "items":{
			            "type": "object",
		                "properties": {
		                	"id": {
		                		"type": "string"
		                	},
		                	"name": {
		                		"type": "string"
		                	},
					        "follower_count": {
					            "type": "number"
					        },
		                	"url": {
					            "type": "string"
					        },
					        "is_following": {
					            "type": "boolean"
					        },
					        "images": {
					        	"type": "array",
					        	"items": {
					                "type": "object",
					                "properties": {
					                	"height": {
					                		"type": "number"
					                	},
					                	"width": {
					                		"type": "number"
					                	},
					                	"url": {
								            "type": "string"
								        }
					                }
					            }
					        }
		                }
		            }
		        },
		        "paging":{
		        	"offset": {
                		"type": "number"
                	},
                	"limit":{
                		"type": "number"
                	},
                	"previous":{
                		"type": "string"
                	},
                	"next":{
                		"type": "string"
                	}
		        },
		        "summary": {
		            "type": "object",
		            "properties":{
		            	"total":{
		            		"type": number
		            	}
		            }
		        }
			}

		}


## Following Collection [/following/{host_member_id}/{my_member_id}]

### Get following state [GET]

+ Response 200 (application/json)

	+ Body

		{
			"is_following": true
		}

	+ Schema
		{
			"type": "object",
			"properties":{
				"is_following":{
					"type": "boolean"
				}
			}
		}

### Update following state [PUT]

+ Request (application/json)

	+ Attributes (object)
        + is_following: true (boolean, required)

	+ Body

		{
			"is_following": false
		}

+ Response 204