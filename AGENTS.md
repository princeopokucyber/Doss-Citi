<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Use TanStack file routes for every public content page, with shared hospitality layouts and sections in src/components; this keeps navigation and page metadata consistent.
- Keep business content, sample room rates, image references, and the optional HTTPS booking widget URL in src/lib/guesthouse.ts so the template has one editable source.
- Keep owner-photo gallery data separate from blog inspiration images; this allows property photo replacements without changing the blog's imagery.
- Keep homepage background-carousel behavior in a focused component and its photo references in the central guest-house data module; this isolates animation and controls from stationary page content.
- Bound property photos with explicit aspect-ratio frames; gallery previews use equal-size grids and subject-aware cover crops, while section portraits and lightboxes use contain to retain full originals without overflow.
- Public contact and newsletter forms insert through the generated Cloud client with insert-only RLS policies and database constraints; visitor data must never be publicly readable.
- Booking requests are inquiries, not confirmed reservations; only show a third-party booking iframe when the owner's genuine provider embed URL is configured.
- Downloaded location photographs use CDN asset pointers and retain source, author, date, and license credits alongside the image data; this preserves provenance and reuse obligations.
