import { Project } from "./data";

export const TableRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <tr className="">
      <th className="text-left">{label}:</th>
      <td className="text-lg ">{value}</td>
    </tr>
  );
};

export const ProjectData = ({ project }: { project: Project }) => {
  return (
    <div className="flex  flex-col font-mono p-5 select-none md:flex-row">
      <div className="flex flex-col justify-between w-full flex-1">
        <h2 className="text-2xl flex justify-center">Data</h2>
        <table className="">
          <TableRow label="Created" value={project.createdAt} />
          <TableRow
            label="Complexity"
            value={"🧠".repeat(project.projectComplexity)}
          />
          <TableRow
            label="Fun To Code?"
            value={"️😎".repeat(project.funToCode)}
          />
          <TableRow
            label="Useful?"
            value={"👍️".repeat(project.projectUsefulness)}
          />
        </table>
      </div>

      <div className="flex flex-col justify-start  items-center h-full flex-1">
        <h2 className="text-2xl">Links</h2>
        <ol>
          {project.links.map((link) => {
            return (
              <li key={link.title} className="list-disc">
                <a
                  href={link.url}
                  target="_blank"
                  className="text-md underline"
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
