import { Comment } from "./comment";

export type rate = {
  total_point: number;
  count_review: number;
  rate_point: Array<{
    title: string;
    point: number;
  }>;
  customer_comments: Array<Comment>;
};
