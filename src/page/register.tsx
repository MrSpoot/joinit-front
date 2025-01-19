import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col p-4 size-full">
      <div className="w-full">
        <Button
          variant={"outline"}
          onClick={() => {
            step === 1 && navigate("/login");
            step === 2 && setStep(1);
            step === 3 && setStep(2);
          }}
        >
          <ChevronLeft />
        </Button>
        {step === 1 && <PersonalStep onContinue={() => setStep(2)} />}
        {step === 2 && <AccountStep onContinue={() => setStep(3)} />}
        {step === 3 && <ConfirmStep onContinue={() => navigate("/login")} />}
      </div>
    </div>
  );
};

const PersonalStep: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  return (
    <>
      <div className="flex w-full h-4 gap-2 my-8">
        <div className="w-1/3 h-full rounded-full bg-blue-400"></div>
        <div className="w-1/3 h-full rounded-full bg-blue-100"></div>
        <div className="w-1/3 h-full rounded-full bg-blue-100"></div>
      </div>
      <div className="my-4">
        <div className=" text-lg font-semibold">Basic Personal Information</div>
        <div className="text-sm">
          Please provide basic personal information. This help us to give you
          the best event
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="firstname">Firstname:</Label>
          <Input id="firstname" type="text" placeholder="Aaron" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastname">Lastname:</Label>
          <Input id="lastname" type="text" placeholder="Dickinson" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="birthday">Date of Birth (DD.MM.YY):</Label>
          <Input id="birthday" type="date" required />
        </div>
      </div>
      <Button className="w-full mt-8" onClick={onContinue}>
        Create account
      </Button>
    </>
  );
};

const AccountStep: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="flex w-full h-4 gap-2 my-8">
        <div className="w-1/3 h-full rounded-full bg-blue-400"></div>
        <div className="w-1/3 h-full rounded-full bg-blue-400"></div>
        <div className="w-1/3 h-full rounded-full bg-blue-100"></div>
      </div>
      <div className="my-4">
        <div className=" text-lg font-semibold">Account Information</div>
        <div className="text-sm">
          Create your account to discover lots of events arround you, around the
          world
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Eamil:</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            icon={
              showPassword ? (
                <Eye
                  size={16}
                  color="gray"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeOff
                  size={16}
                  color="gray"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )
            }
            position="end"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password:</Label>
          <Input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            required
            icon={
              showConfirmPassword ? (
                <Eye
                  size={16}
                  color="gray"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <EyeOff
                  size={16}
                  color="gray"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )
            }
            position="end"
          />
        </div>
      </div>
      <Button className="w-full mt-8" onClick={onContinue}>
        Confirm account
      </Button>
    </>
  );
};

const ConfirmStep: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  return (
    <>
      <div className="flex w-full h-4 gap-2 my-8">
        <div className="w-1/3 h-full rounded-full bg-blue-400"></div>
        <div className="w-1/3 h-full rounded-full bg-blue-400"></div>
        <div className="w-1/3 h-full rounded-full bg-blue-400"></div>
      </div>
      <div className="my-4">
        <div className=" text-lg font-semibold">Account Information</div>
        <div className="text-sm">
          Create your account to discover lots of events arround you, around the
          world
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Eamil:</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password:</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password:</Label>
          <Input id="confirm-password" type="password" required />
        </div>
      </div>
      <Button className="w-full mt-8" onClick={onContinue}>
        Confirm account
      </Button>
    </>
  );
};

export default Register;
