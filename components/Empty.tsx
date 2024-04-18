import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full w-full p-14 flex flex-col items-center justify-center">
      <div className="relative h-20 w-20">
        <Image alt="empty" fill src="/empty.png" />
      </div>
      <p className="text-sm text-center text-muted-foreground">{label}</p>
    </div>
  );
};
