import { Card, Metric, Text, Icon, Flex, Color, Grid } from "@tremor/react";
import Link from "next/link";

interface Article {
  author: string;
  content: string;
  created_at: string;
  headline: string;
  id: number;
  images: Image[];
  source: string;
  summary: string;
  symbols: string[];
  updated_at: string;
  url: string;
}

interface Image {
  size: "large" | "small" | "thumb";
  url: string;
}

export default function NewsCard({ news }: { news: Article[] }) {

  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {news.map((item) => (
        <Card key={item.id} decoration="top" decorationColor="green">
          <a href={item.url}>
            <Flex justifyContent="start" className="space-x-4">
              <img src={item.images[2]?.url} width="50" height="60" />
              <div className="truncate">
                <Text>{item.headline}</Text>
              </div>
            </Flex>
          </a>
        </Card>
      ))}
    </Grid>
  );
}
