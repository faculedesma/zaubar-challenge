import Media from "@/components/media";
import ContentWrapper from "@/components/common/content-wrapper";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const MediaPage = ({ data }) => {
  return (
    <ContentWrapper>
      <Media media={data} />
    </ContentWrapper>
  );
};

export default MediaPage;

export async function getServerSideProps(context) {
  const files = await prisma.file.findMany();
  const folders = await prisma.folder.findMany({
    where: {
      parentId: null,
    },
  });

  return {
    props: {
      data: {
        files: JSON.parse(JSON.stringify(files)),
        folders: JSON.parse(JSON.stringify(folders)),
      },
    },
  };
}
