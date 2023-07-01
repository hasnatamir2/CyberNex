import React from "react";
import axios from "axios";

import queryString from "query-string";
import Products from "@/components/admin/Products";

const getProducts = async (searchParams) => {
  const urlParams = {
    page: searchParams.page,
  };

  const searchQuery = queryString.stringify(urlParams);

  const res = await fetch(
    `${process.env.API_URL}/api/products?${searchQuery}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 5
      }
    }
  );
  const data = await res.json();
  return data;
};

const HomePage = async ({ searchParams }) => {
  const data = await getProducts(searchParams);

  return <Products data={data} />;
};

export default HomePage;
