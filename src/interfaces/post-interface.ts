import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import { Document, ObjectId } from "mongoose";
export interface PostScheme extends Document {
  _id?: string | ObjectId;
  name?: string;
  image?: string;
}

export interface PostVerfify {
}
