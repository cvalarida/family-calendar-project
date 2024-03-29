// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      allCalendarEvents?: CalendarEvent[];
    }
    // interface PageState {}
    // interface Platform {}
  }
}

interface CalendarEvent {
  // TODO FAM-12
}

export { };
