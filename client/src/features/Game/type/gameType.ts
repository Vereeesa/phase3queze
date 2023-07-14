export type Question = {
  id: number;
  questionName: string;
  answer: string;
  topicId: number;
  count: number;
};

export type Topic = {
  id: number;
  topicName: string;
  Questions: Question[];
};
