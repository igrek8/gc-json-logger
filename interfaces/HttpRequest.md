[gc-json-logger](../README.md) / [Exports](../modules.md) / HttpRequest

# Interface: HttpRequest

## Table of contents

### Properties

- [cacheFillBytes](HttpRequest.md#cachefillbytes)
- [cacheHit](HttpRequest.md#cachehit)
- [cacheLookup](HttpRequest.md#cachelookup)
- [cacheValidatedWithOriginServer](HttpRequest.md#cachevalidatedwithoriginserver)
- [latency](HttpRequest.md#latency)
- [protocol](HttpRequest.md#protocol)
- [referer](HttpRequest.md#referer)
- [remoteIp](HttpRequest.md#remoteip)
- [requestMethod](HttpRequest.md#requestmethod)
- [requestSize](HttpRequest.md#requestsize)
- [requestUrl](HttpRequest.md#requesturl)
- [responseSize](HttpRequest.md#responsesize)
- [serverIp](HttpRequest.md#serverip)
- [status](HttpRequest.md#status)
- [userAgent](HttpRequest.md#useragent)

## Properties

### cacheFillBytes

• `Optional` **cacheFillBytes**: `string`

The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.

#### Defined in

[types/HttpRequest.ts:32](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L32)

___

### cacheHit

• `Optional` **cacheHit**: `boolean`

Whether or not an entity was served from cache (with or without validation).

#### Defined in

[types/HttpRequest.ts:28](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L28)

___

### cacheLookup

• `Optional` **cacheLookup**: `boolean`

Whether or not a cache lookup was attempted.

#### Defined in

[types/HttpRequest.ts:26](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L26)

___

### cacheValidatedWithOriginServer

• `Optional` **cacheValidatedWithOriginServer**: `boolean`

Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cacheHit is True.

#### Defined in

[types/HttpRequest.ts:30](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L30)

___

### latency

• `Optional` **latency**: `string`

The request processing latency on the server, from the time the request was received until the response was sent.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

#### Defined in

[types/HttpRequest.ts:24](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L24)

___

### protocol

• `Optional` **protocol**: `string`

Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"

#### Defined in

[types/HttpRequest.ts:34](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L34)

___

### referer

• `Optional` **referer**: `string`

The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions.

#### Defined in

[types/HttpRequest.ts:19](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L19)

___

### remoteIp

• `Optional` **remoteIp**: `string`

The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329".

#### Defined in

[types/HttpRequest.ts:15](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L15)

___

### requestMethod

• `Optional` **requestMethod**: `string`

The request method. Examples: "GET", "HEAD", "PUT", "POST".

#### Defined in

[types/HttpRequest.ts:3](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L3)

___

### requestSize

• `Optional` **requestSize**: `string`

The size of the HTTP request message in bytes, including the request headers and the request body.

#### Defined in

[types/HttpRequest.ts:7](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L7)

___

### requestUrl

• `Optional` **requestUrl**: `string`

The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red".

#### Defined in

[types/HttpRequest.ts:5](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L5)

___

### responseSize

• `Optional` **responseSize**: `string`

The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.

#### Defined in

[types/HttpRequest.ts:11](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L11)

___

### serverIp

• `Optional` **serverIp**: `string`

The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329".

#### Defined in

[types/HttpRequest.ts:17](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L17)

___

### status

• `Optional` **status**: `number`

The response code indicating the status of response. Examples: 200, 404.

#### Defined in

[types/HttpRequest.ts:9](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L9)

___

### userAgent

• `Optional` **userAgent**: `string`

The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)".

#### Defined in

[types/HttpRequest.ts:13](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/types/HttpRequest.ts#L13)
