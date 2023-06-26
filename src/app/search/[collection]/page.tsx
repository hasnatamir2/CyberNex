import React from "react";
import { defaultSort, sorting } from "@/libs/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Grid from "@components/grid";

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: { collection: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const { sort } = searchParams as { [key: string]: string };
    const { sortKey, reverse } =
        sorting.find((item) => item.slug === sort) || defaultSort;

    return <section>{params.collection}</section>;
}
