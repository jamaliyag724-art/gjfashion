const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-8 md:py-12">
      <div className="h-px w-16 bg-border" />
      <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
      <div className="h-px w-16 bg-border" />
    </div>
  );
};

export default SectionDivider;