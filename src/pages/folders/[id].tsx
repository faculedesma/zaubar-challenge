import React from "react";
import { useRouter } from "next/router";
import Media from "@/components/media";
import ContentWrapper from "@/components/common/content-wrapper";

const FolderPage = () => {
  const router = useRouter();

  const { id } = router.query;

  console.log(router);

  return (
    <ContentWrapper>
      <Media folderId={id} />
    </ContentWrapper>
  );
};

export default FolderPage;
