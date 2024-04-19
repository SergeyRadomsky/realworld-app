type Props = {
  params: {
    id: string;
  };
};

export default function Article({ params: { id } }: Props) {
  return (
    <>
    <div>статья ${id}</div>
    </>
  );
}

// interface ArticleProps {
//   params: { slug: string }
// }

// export async function generateMetadata({
//   params,
// }: ArticleProps): Promise<Metadata> {
//   // const data = await getArticle({ slug: params.slug })

//   return data ? { title: data.title } : {}
// }

// const articlePage = async ({ params }: ArticleProps) => {
//   // const article = await getArticle({ slug: params.slug })
//   if (!article) {
//     return redirect('/')
//   }

// export default function Page() {
//   return (
//     <div></div>
//   );
// }
