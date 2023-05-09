import { Response } from "express";

export interface FoodsSchema {
  category: {
    doce: {
      name?: string;
      text?: string;
      image?: string;
    };
  };
}

export interface FoodFrutas {
  category: {
    frutas: {
      name?: string;
      text?: string;
      image?: string;
    };
  };
}
export interface FoodVerduras {
  category: {
    verduras: {
      name?: string;
      text?: string;
      image?: string;
    };
  };
}
