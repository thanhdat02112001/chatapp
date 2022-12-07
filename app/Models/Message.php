<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['room', 'sender', 'receiver', 'content'];

    /**
     * Get sender that owns the message.
     */
    public function sender()
    {
        return $this->belongsTo(User::class, 'sender');
    }

    /**
     * Get receiver that owns the message.
     */
    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver');
    }

     /**
     * Get room that has the message.
     */
    public function room()
    {
        return $this->belongsTo(Chatroom::class, 'room');
    }
}
