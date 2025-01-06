import { Router } from "express";
import { converHtml } from "./controller.js";

export const router=Router();

router.post("/convert",converHtml)