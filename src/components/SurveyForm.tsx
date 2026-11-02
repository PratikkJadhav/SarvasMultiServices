import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteContent } from '@/data/siteContent';

type FieldName = 'facilityName' | 'facilityType' | 'serviceNeeded' | 'preferredWeek' | 'email' | 'notes';
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const REQUIRED_FIELDS: FieldName[] = ['facilityName', 'facilityType', 'serviceNeeded', 'preferredWeek'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY_VALUES: FormValues = {
  facilityName: '',
  facilityType: '',
  serviceNeeded: '',
  preferredWeek: '',
  email: '',
  notes: '',
};

const { form } = siteContent.survey;
const fieldInputClass =
  'w-full appearance-none rounded-none border-0 bg-transparent px-0 py-3 text-base text-navy placeholder:text-muted/70 focus:outline-none';

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  for (const name of REQUIRED_FIELDS) {
    if (!values[name].trim()) errors[name] = form.errors.required;
  }
  if (!values.email.trim()) {
    errors.email = form.errors.required;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = form.errors.email;
  }
  return errors;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </label>
      <div className="field-underline relative mt-1 border-b border-line">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function SurveyForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [previewShown, setPreviewShown] = useState(false);
  const { fields } = form;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = event.target.name as FieldName;
    setValues((current) => ({ ...current, [name]: event.target.value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setPreviewShown(Object.keys(nextErrors).length === 0);
  };

  return (
    <Reveal delay={150} className="h-full">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="rounded-lg border border-line bg-white p-6 shadow-lg sm:p-10"
      >
        <h3 className="text-xl font-bold">{form.title}</h3>

        <div className="mt-8 grid gap-7 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field id="survey-facilityName" label={fields.facilityName.label} error={errors.facilityName}>
              <input
                id="survey-facilityName"
                name="facilityName"
                type="text"
                autoComplete="organization"
                placeholder={fields.facilityName.placeholder}
                value={values.facilityName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.facilityName)}
                className={fieldInputClass}
              />
            </Field>
          </div>

          <Field id="survey-facilityType" label={fields.facilityType.label} error={errors.facilityType}>
            <select
              id="survey-facilityType"
              name="facilityType"
              value={values.facilityType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.facilityType)}
              className={`${fieldInputClass} ${values.facilityType ? '' : 'text-muted/70'}`}
            >
              <option value="" disabled>
                {fields.facilityType.placeholder}
              </option>
              {fields.facilityType.options.map((option) => (
                <option key={option} value={option} className="text-navy">
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field id="survey-preferredWeek" label={fields.preferredWeek.label} error={errors.preferredWeek}>
            <select
              id="survey-preferredWeek"
              name="preferredWeek"
              value={values.preferredWeek}
              onChange={handleChange}
              aria-invalid={Boolean(errors.preferredWeek)}
              className={`${fieldInputClass} ${values.preferredWeek ? '' : 'text-muted/70'}`}
            >
              <option value="" disabled>
                {fields.preferredWeek.placeholder}
              </option>
              {fields.preferredWeek.options.map((option) => (
                <option key={option} value={option} className="text-navy">
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <div className="sm:col-span-2">
            <Field id="survey-serviceNeeded" label={fields.serviceNeeded.label} error={errors.serviceNeeded}>
              <select
                id="survey-serviceNeeded"
                name="serviceNeeded"
                value={values.serviceNeeded}
                onChange={handleChange}
                aria-invalid={Boolean(errors.serviceNeeded)}
                className={`${fieldInputClass} ${values.serviceNeeded ? '' : 'text-muted/70'}`}
              >
                <option value="" disabled>
                  {fields.serviceNeeded.placeholder}
                </option>
                {fields.serviceNeeded.options.map((option) => (
                  <option key={option} value={option} className="text-navy">
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="sm:col-span-2">
            <Field id="survey-email" label={fields.email.label} error={errors.email}>
              <input
                id="survey-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={fields.email.placeholder}
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                className={fieldInputClass}
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            <Field id="survey-notes" label={fields.notes.label}>
              <textarea
                id="survey-notes"
                name="notes"
                rows={3}
                placeholder={fields.notes.placeholder}
                value={values.notes}
                onChange={handleChange}
                className={`${fieldInputClass} resize-none`}
              />
            </Field>
          </div>
        </div>

        <button type="submit" className="btn-primary group mt-10 w-full">
          <span>{form.submit}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </button>

        <p className="mt-4 text-center text-xs text-muted">{form.footnote}</p>

        {previewShown && (
          <p role="status" className="mt-6 rounded-lg bg-mint px-4 py-3 text-sm text-navy">
            {form.preview}
          </p>
        )}
      </form>
    </Reveal>
  );
}
