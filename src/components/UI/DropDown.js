import { Menu } from '@headlessui/react';

export default function DropDown({ menuButton, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center">{menuButton}</Menu.Button>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {items.map((element, i) => {
          return (
            <div key={i} className="px-1 py-1 ">
              <Menu.Item>{({ active }) => element}</Menu.Item>
            </div>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
