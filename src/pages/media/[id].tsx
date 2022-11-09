import Media from "@/components/media";
import ContentWrapper from "@/components/common/content-wrapper";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const FolderPage = ({ data }) => {
  return (
    <ContentWrapper>
      <Media media={data} />
    </ContentWrapper>
  );
};

export default FolderPage;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const files = await prisma.file.findMany({
    where: {
      folderId: id,
    },
  });
  const folders = await prisma.folder.findMany({
    where: {
      parentId: id,
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
