# Elastic search notes

- Nodes store the data that we add to Elasticsearch
- A cluster is a collection of nodes
- Data is stored as documents, which are JSON objects
- Documents are grouped together with indices

```javascript
// Input object
{
  "name": "Pervez",
  "country": "India"
}

// stored in Elastic as 
{
  "_index": "people",
  "_type": "_doc"
  "_id": "123"
  "_version": 1,
  "_seq_no": 0,
  "_primary_term": 1,
  "_source": {
    "name": "Pervez",
    "country": "India"
  }
}
```