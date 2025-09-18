import SOSButton from '../SOSButton';

export default function SOSButtonExample() {
  return (
    <div className="p-4 space-y-4 relative min-h-[200px]">
      <h2 className="text-xl font-bold">SOS Button Example</h2>
      <p className="text-muted-foreground">
        The SOS button appears as a floating element in the bottom right corner.
        Click it to access emergency support features.
      </p>
      <SOSButton />
    </div>
  );
}