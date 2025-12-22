{
	"info": {
		"_postman_id": "cf4173c3-63fe-426f-9592-dc9ccc23150c",
		"name": "valor negativo",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "49991646",
		"_collection_link": "https://carvalhofernanda64846-8443013.postman.co/workspace/Fernanda-Carvalho's-Workspace~ab28b8f2-c46a-4bef-8b45-3a63f4c9ce67/collection/49991646-cf4173c3-63fe-426f-9592-dc9ccc23150c?action=share&source=collection_link&creator=49991646"
	},
	"item": [
		{
			"name": "atualizar com valores negativos",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "apikey",
						"value": "sb_publishable_buT2AMz6E8wM4fyUODO5KQ_bUKyIA0D",
						"type": "text"
					},
					{
						"key": "Authorization",
						"value": "Bearer sb_publishable_buT2AMz6E8wM4fyUODO5KQ_bUKyIA0D",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"id\": 52,\r\n  \"name\": \"coxinha\",\r\n  \"price\": -8\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://sdacfrcawkkpkiwqeyng.supabase.co/rest/v1/lanchonete?id=eq.52",
					"protocol": "https",
					"host": [
						"sdacfrcawkkpkiwqeyng",
						"supabase",
						"co"
					],
					"path": [
						"rest",
						"v1",
						"lanchonete"
					],
					"query": [
						{
							"key": "id",
							"value": "eq.52"
						}
					]
				}
			},
			"response": []
		}
	]
}
