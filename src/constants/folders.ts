export const foldersMock = [
  {
    id: "folder-one",
    name: "folder-one",
    nested: [{ id: "folder-three", name: "folder-three" }],
    breadcrumbs: [],
  },
  {
    id: "folder-two",
    name: "folder-two",
    nested: [
      { id: "folder-four", name: "folder-four" },
      { id: "folder-five", name: "folder-five" },
    ],
    breadcrumbs: [],
  },
  {
    id: "folder-three",
    name: "folder-three",
    nested: [],
    breadcrumbs: ["folder-one"],
  },
  {
    id: "folder-four",
    name: "folder-four",
    nested: [],
    breadcrumbs: ["folder-two"],
  },
  {
    id: "folder-five",
    name: "folder-five",
    nested: [],
    breadcrumbs: ["folder-two"],
  },
];
