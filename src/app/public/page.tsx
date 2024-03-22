import { NextPage } from "next";
import React from "react";
import { CodeSnippet } from "@/components/code-snippet";
import { getPublicMessage } from "@/services/message.service";

const Public: NextPage = async () => {
  const { text } = await getPublicMessage();

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Public Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>public message</strong>.
          </span>
          <span>
            <strong>Any visitor can access this page.</strong>
          </span>
        </p>
        <CodeSnippet title="Public Message" code={text} />
      </div>
    </div>
  );
};

export default Public;
