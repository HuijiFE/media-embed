# API

> NOTE: Must use `encodeURIComponent` method to encode the url for media in javascript.

## Media

* media info

```bash
curl -X GET http://localhost:7100/media/info/<urlToMediaPage>
```

* HTML iframe tag for emebed

```bash
curl -X GET http://localhost:7100/media/embed/<urlToMediaPage>
```
