// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file schema/v1/schema.proto (package schema.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Struct} from "@bufbuild/protobuf";

/**
 * @generated from message schema.v1.ResolveBooleanRequest
 */
export const ResolveBooleanRequest = proto3.makeMessageType(
  "schema.v1.ResolveBooleanRequest",
  () => [
    { no: 1, name: "flag_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "context", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message schema.v1.ResolveBooleanResponse
 */
export const ResolveBooleanResponse = proto3.makeMessageType(
  "schema.v1.ResolveBooleanResponse",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message schema.v1.ResolveStringRequest
 */
export const ResolveStringRequest = proto3.makeMessageType(
  "schema.v1.ResolveStringRequest",
  () => [
    { no: 1, name: "flag_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "context", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message schema.v1.ResolveStringResponse
 */
export const ResolveStringResponse = proto3.makeMessageType(
  "schema.v1.ResolveStringResponse",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message schema.v1.ResolveFloatRequest
 */
export const ResolveFloatRequest = proto3.makeMessageType(
  "schema.v1.ResolveFloatRequest",
  () => [
    { no: 1, name: "flag_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "context", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message schema.v1.ResolveFloatResponse
 */
export const ResolveFloatResponse = proto3.makeMessageType(
  "schema.v1.ResolveFloatResponse",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message schema.v1.ResolveIntRequest
 */
export const ResolveIntRequest = proto3.makeMessageType(
  "schema.v1.ResolveIntRequest",
  () => [
    { no: 1, name: "flag_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "context", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message schema.v1.ResolveIntResponse
 */
export const ResolveIntResponse = proto3.makeMessageType(
  "schema.v1.ResolveIntResponse",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message schema.v1.ResolveObjectRequest
 */
export const ResolveObjectRequest = proto3.makeMessageType(
  "schema.v1.ResolveObjectRequest",
  () => [
    { no: 1, name: "flag_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "context", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message schema.v1.ResolveObjectResponse
 */
export const ResolveObjectResponse = proto3.makeMessageType(
  "schema.v1.ResolveObjectResponse",
  () => [
    { no: 1, name: "value", kind: "message", T: Struct },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message schema.v1.EventStreamResponse
 */
export const EventStreamResponse = proto3.makeMessageType(
  "schema.v1.EventStreamResponse",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "message", T: Struct },
  ],
);
