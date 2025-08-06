import { supabase } from "@/app/lib/supabase";
import { Slider } from "@/app/components/layout/menu/Slider";
import ClientLayout from "./ClientLayout";
import { FilterList } from "@/app/components/common/FilterList";
import { Filter } from "@/app/components/layout/menu/Filter";

export default async function MenuPage() {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) console.log(`❌ Ошибка при загрузке из Supabase: ${error.message}`)

  if (data === null)
    return <p className="text-gray-500">🔄 Загрузка данных из Supabase...</p>;
  if (error) return <p className="text-red-600">❌ Ошибка: {error}</p>;
  if (data.length === 0)
    return (
      <p className="text-yellow-600">
        ⚠️ Данные не найдены в таблице <b>menu</b>.
      </p>
    );

  return (
    <ClientLayout>
      <div className="flex justify-center items-start w-full mx-auto gap-6">
        <Filter />
        <FilterList className="mb-20 w-fit mx-0" />
      </div>
      <Slider menuItems={data} />
    </ClientLayout>
  );
}
