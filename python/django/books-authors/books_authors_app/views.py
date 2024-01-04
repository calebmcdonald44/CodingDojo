from django.shortcuts import render, redirect
from .models import Book, Author

def index(request):
    books = Book.objects.all()
    context = {
        'books': books
    }
    return render(request, 'index.html', context)

def add_book(request):
    new_title = request.POST.get('title')
    new_desc = request.POST.get('desc')
    Book.objects.create(title=new_title, desc=new_desc)
    return redirect('index')

def view_book(request, book_id):
    current_book = Book.objects.get(id=book_id)
    current_book_authors = current_book.authors.all()
    authors = Author.objects.all()
    available_authors = []

    for a in authors:
        include = True
        for b in current_book_authors:
            if b.id == a.id:
                include = False
        if include == True:
            available_authors.append({'id': a.id, 'name': (a.first_name + ' ' + a.last_name)})

    context = {
        'book': current_book,
        'authors': authors,
        'available_authors': available_authors
    }
    return render(request, 'view_book.html', context)

def book_add_author(request, book_id):
    current_book = Book.objects.get(id=book_id)
    current_author = Author.objects.get(id=request.POST.get('selected_author'))
    current_book.authors.add(current_author)
    return redirect(f'/book/{book_id}/')

def authors(request):
    authors = Author.objects.all()
    context = {
        'authors': authors
    }
    return render(request, 'authors.html', context)

def add_author(request):
    new_first_name = request.POST.get('first_name')
    new_last_name = request.POST.get('last_name')
    new_notes = request.POST.get('notes')
    Author.objects.create(first_name=new_first_name, last_name=new_last_name, notes=new_notes)
    return redirect('/authors/')

def view_author(request, author_id):
    current_author = Author.objects.get(id=author_id)
    current_author_books = current_author.books.all()
    books = Book.objects.all()
    available_books = []

    for a in books:
        include = True
        for b in current_author_books:
            if b.id == a.id:
                include = False
        if include == True:
            available_books.append({'id': a.id, 'title': (a.title)})

    context = {
        'author': current_author,
        'books': books,
        'available_books': available_books
    }
    return render(request, 'view_author.html', context)

def author_add_book(request, author_id):
    current_author = Author.objects.get(id=author_id)
    current_book = Book.objects.get(id=request.POST.get('selected_book'))
    current_author.books.add(current_book)
    return redirect(f'/author/{author_id}/')