import CheckIcon from "@/shared/icons/check-icon";

export default function CompareFeaturesTable() {
  return (
    <table className="w-full table-fixed xl:mx-auto xl:max-w-183">
      <colgroup>
        <col className="w-2/5" />
        <col span={3} />
      </colgroup>
      <thead className="border-b border-neutral-950">
        <tr>
          <th
            scope="col"
            className="text-preset-7 p-6 pt-0 text-left text-neutral-950 uppercase"
          >
            <h4>The features</h4>
          </th>
          <th
            scope="col"
            className="text-preset-7 p-6 pt-0 text-center text-neutral-950 uppercase"
          >
            Basic
          </th>
          <th
            scope="col"
            className="text-preset-7 p-6 pt-0 text-center text-neutral-950 uppercase"
          >
            Pro
          </th>
          <th
            scope="col"
            className="text-preset-7 p-6 pt-0 text-center text-neutral-950 uppercase"
          >
            Business
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            UNLIMITED STORY POSTING
          </th>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            UNLIMITED PHOTO UPLOAD
          </th>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            EMBEDDING CUSTOM CONTENT
          </th>
          <td className="p-6"></td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            CUSTOMIZE METADATA
          </th>
          <td className="p-6"></td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            ADVANCED METRICS
          </th>
          <td className="p-6"></td>
          <td className="p-6"></td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            PHOTO DOWNLOADS
          </th>
          <td className="p-6"></td>
          <td className="p-6"></td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            SEARCH ENGINE INDEXING
          </th>
          <td className="p-6"></td>
          <td className="p-6"></td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
        <tr className="border-b border-neutral-300">
          <th
            scope="row"
            className="text-preset-7 p-6 text-left text-neutral-950"
          >
            CUSTOM ANALYTICS
          </th>
          <td className="p-6"></td>
          <td className="p-6"></td>
          <td className="p-6">
            <CheckIcon className="mx-auto block" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
